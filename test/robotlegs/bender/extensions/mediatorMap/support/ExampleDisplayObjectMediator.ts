// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable, inject } from "@robotlegsjs/core";

import DisplayObject from "openfl/display/DisplayObject";

import { MediatorWatcher } from "./MediatorWatcher";

@injectable()
export class ExampleDisplayObjectMediator {
    @inject(MediatorWatcher)
    public mediatorWatcher: MediatorWatcher;

    @inject(DisplayObject)
    public view: DisplayObject;

    public initialize(): void {
        this.mediatorWatcher.notify("ExampleDisplayObjectMediator");
    }
}
