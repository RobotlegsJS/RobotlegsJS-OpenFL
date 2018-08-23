// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import "../../../../entry";

import { assert } from "chai";

import { interfaces, IContext, Context, LogLevel } from "@robotlegsjs/core";

import { DisplayObjectObserver } from "../../../../../src/robotlegs/bender/bundles/openfl/observer/DisplayObjectObserver";

import { IDisplayObject } from "../../../../../src/robotlegs/bender/extensions/displayList/api/IDisplayObject";
import { IDisplayObjectObserver } from "../../../../../src/robotlegs/bender/extensions/displayList/api/IDisplayObjectObserver";
import { IDisplayObjectObserverFactory } from "../../../../../src/robotlegs/bender/extensions/displayList/api/IDisplayObjectObserverFactory";

import { StageObserverExtension, ViewManagerExtension } from "../../../../../src";

import { CallbackLogTarget } from "../contextView/support/CallbackLogTarget";
import { LogParams } from "../contextView/support/LogParams";

describe("StageObserverExtension", () => {
    let context: IContext;

    beforeEach(() => {
        context = new Context();
        context.injector
            .bind<interfaces.Factory<IDisplayObjectObserver>>(IDisplayObjectObserverFactory)
            .toFactory<IDisplayObjectObserver>(() => {
                return (view: IDisplayObject, useCapture: boolean): IDisplayObjectObserver => {
                    return new DisplayObjectObserver(view, useCapture);
                };
            });
    });

    afterEach(() => {
        context.destroy();
        context = null;
    });

    it("installing_after_initialization_throws_error", () => {
        function installExtensionAfterInitialization(): void {
            context.initialize();
            context.install(StageObserverExtension);
        }
        assert.throws(installExtensionAfterInitialization, Error);
    });

    it("extension_logs_debug_messages_when_initializing_and_destroying", () => {
        let whenInitializingLogged: boolean = false;
        let whenDestroyingLogged: boolean = false;
        let logTarget: CallbackLogTarget = new CallbackLogTarget((log: LogParams) => {
            if (log.source instanceof StageObserverExtension && log.level === LogLevel.DEBUG) {
                if (!whenInitializingLogged) {
                    whenInitializingLogged = log.message === "Creating genuine StageObserver Singleton";
                }
                if (!whenDestroyingLogged) {
                    whenDestroyingLogged = log.message === "Destroying genuine StageObserver Singleton";
                }
            }
        });
        context.logLevel = LogLevel.DEBUG;
        context.install(ViewManagerExtension, StageObserverExtension);
        context.addLogTarget(logTarget);
        context.initialize();
        context.destroy();
        assert.isTrue(whenInitializingLogged);
        assert.isTrue(whenDestroyingLogged);
    });
});
