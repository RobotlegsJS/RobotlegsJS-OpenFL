// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IDisplayObject } from "../../../../../../src/robotlegs/bender/extensions/displayList/api/IDisplayObject";
import { IDisplayObjectObserver } from "../../../../../../src/robotlegs/bender/extensions/displayList/api/IDisplayObjectObserver";

import { MockDisplayObject } from "./MockDisplayObject";

/**
 *
 */
export class MockDisplayObjectObserver implements IDisplayObjectObserver {
    private _displayObject: MockDisplayObject;

    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/

    /**
     *
     * @param displayObject
     * @param useCapture
     */
    constructor(displayObject: IDisplayObject, useCapture: boolean) {
        if (displayObject !== null && displayObject !== undefined) {
            this._displayObject = <MockDisplayObject>displayObject;
        } else {
            throw new Error("DisplayObject can't be null or undefined");
        }
    }

    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/

    /**
     *
     * @param handler
     */
    public addAddedToStageHandler(handler: Function): void {}

    /**
     *
     * @param handler
     */
    public addRemovedFromStageHandler(handler: Function): void {}

    /**
     *
     * @param handler
     */
    public addConfigureViewHandler(handler: Function): void {}

    /**
     *
     */
    public destroy(): void {
        this._displayObject = null;
    }

    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/

    /*============================================================================*/
    /* Public Properties                                                          */
    /*============================================================================*/

    /**
     * The display object
     */
    public get displayObject(): IDisplayObject {
        return <IDisplayObject>this._displayObject;
    }
}
