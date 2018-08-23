// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IDisplayObject } from "../../../../../../src/robotlegs/bender/extensions/displayList/api/IDisplayObject";
import { IDisplayObjectContainer } from "../../../../../../src/robotlegs/bender/extensions/displayList/api/IDisplayObjectContainer";

export class MockDisplayObject implements IDisplayObject {
    private _parent: IDisplayObjectContainer;
    public set parent(value: IDisplayObjectContainer) {
        this._parent = value;
    }
    public get parent(): IDisplayObjectContainer {
        return this._parent;
    }
}
