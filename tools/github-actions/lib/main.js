"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable github/no-then */
const core = __importStar(require("@actions/core"));
const axios_1 = __importDefault(require("axios"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appcenter_token = core.getInput('appcenter_token');
            const appcenter_user = core.getInput('appcenter_user');
            const appcenter_app = core.getInput('appcenter_app');
            const branch_name = core.getInput('branch_name');
            const settings_branch_name = core.getInput('settings_branch_name');
            core.info('');
            core.info('🔄 Step 1: Check if there is a build in progress');
            const current_status = yield (0, axios_1.default)(`https://api.appcenter.ms/v0.1/apps/${appcenter_user}/${appcenter_app}/branches/${branch_name}/builds`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'X-API-Token': appcenter_token
                }
            }).catch(error => error);
            if (current_status.status !== 200) {
                return core.setFailed(`❌ Error getting the current build status of the branch. ${current_status}`);
            }
            // Check if the current build is in progress
            if (current_status.data.length &&
                current_status.data[0].status !== 'completed') {
                // By default the data is sorted from the newest to the oldest, so we use the first element [0].
                // Build in progress, so we need to finish.
                const finish_current_build = yield (0, axios_1.default)(`https://api.appcenter.ms/v0.1/apps/${appcenter_user}/${appcenter_app}/builds/${current_status.data[0].id}`, {
                    method: 'PATCH',
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json',
                        'X-API-Token': appcenter_token
                    },
                    data: {
                        status: 'cancelling'
                    }
                }).catch(error => error);
                if (finish_current_build.status !== 200) {
                    return core.setFailed(`❌ Error finishing the current build. ${finish_current_build}`);
                }
                core.info('✅ Current build stopped.');
            }
            else {
                core.info('✅ No build in progress.');
            }
            core.info('');
            core.info('🔄 Step 2: Set build configuration');
            const current_settings = yield (0, axios_1.default)(`https://api.appcenter.ms/v0.1/apps/${appcenter_user}/${appcenter_app}/branches/${branch_name}/config`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'X-API-Token': appcenter_token
                },
                /**
                 * This is to avoid crash on 404, because it an expected value.
                 *  200: means that the branch has a configuration.
                 *  404: means that the branch doesn't have a configuration.
                 */
                validateStatus: () => true
            });
            if (![200, 404].includes(current_settings.status)) {
                return core.setFailed(`❌ Error getting the current settings of the branch. ${current_settings}`);
            }
            if (current_settings.status === 200) {
                // Exists a configuration for this branch, so we need to delete it.
                const delete_branch_config = yield (0, axios_1.default)(`https://api.appcenter.ms/v0.1/apps/${appcenter_user}/${appcenter_app}/branches/${branch_name}/config`, {
                    method: 'DELETE',
                    headers: {
                        accept: 'application/json',
                        'X-API-Token': appcenter_token
                    }
                });
                if (delete_branch_config.status !== 200) {
                    return core.setFailed(`❌ Error deleting the current build settings of the branch. ${delete_branch_config}`);
                }
                core.info('✅ Clean previous build configuration.');
            }
            const set_branch = yield (0, axios_1.default)(`https://api.appcenter.ms/v0.1/apps/${appcenter_user}/${appcenter_app}/branches/${branch_name}/config`, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-API-Token': appcenter_token
                },
                data: {
                    cloneFromBranch: settings_branch_name
                }
            }).catch(error => error);
            if (set_branch.status !== 200) {
                return core.setFailed(`❌ Error setting the build configuration. ${set_branch}`);
            }
            core.info('✅ Build configuration set.');
            core.info('');
            core.info('🔄 Step 3: Start build');
            const start_build = yield (0, axios_1.default)(`https://api.appcenter.ms/v0.1/apps/${appcenter_user}/${appcenter_app}/branches/${branch_name}/builds`, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-API-Token': appcenter_token
                },
                data: {
                    debug: false
                }
            }).catch(error => error);
            if (start_build.status !== 200) {
                return core.setFailed(`❌ Error starting build. ${start_build}`);
            }
            core.info(`✅ Build started successfully with id: ${start_build.data.id}.`);
            // As output you'll get the build id, so you can use it in the next steps to call the AppCenter API.
            return core.setOutput('build_id', start_build.data.id);
        }
        catch (error) {
            if (error instanceof Error)
                return core.setFailed(`❌ The flow has failed. ${error.message}`);
        }
    });
}
run();
