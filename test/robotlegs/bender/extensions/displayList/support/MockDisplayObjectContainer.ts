// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IDisplayObject } from "../../../../../../src/robotlegs/bender/extensions/displayList/api/IDisplayObject";
import { IDisplayObjectContainer } from "../../../../../../src/robotlegs/bender/extensions/displayList/api/IDisplayObjectContainer";

import { MockDisplayObject } from "./MockDisplayObject";

export class MockDisplayObjectContainer extends MockDisplayObject implements IDisplayObjectContainer {
    public contains(child: IDisplayObject): boolean {
        return false;
    }
}
