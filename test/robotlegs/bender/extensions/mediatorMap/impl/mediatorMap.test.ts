// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import "../../../../../entry";

import { assert } from "chai";

import { interfaces, IContext, Context, TypeMatcher } from "@robotlegsjs/core";

import { IDisplayObject } from "../../../../../../src/robotlegs/bender/displayList/api/IDisplayObject";
import { IDisplayObjectObserver } from "../../../../../../src/robotlegs/bender/displayList/api/IDisplayObjectObserver";
import { IDisplayObjectObserverFactory } from "../../../../../../src/robotlegs/bender/displayList/api/IDisplayObjectObserverFactory";

import { IMediatorMapper } from "../../../../../../src/robotlegs/bender/extensions/mediatorMap/dsl/IMediatorMapper";
import { MediatorMap } from "../../../../../../src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMap";
import { MediatorMapper } from "../../../../../../src/robotlegs/bender/extensions/mediatorMap/impl/MediatorMapper";

import { MockDisplayObject } from "../../displayList/support/MockDisplayObject";
import { MockDisplayObjectContainer } from "../../displayList/support/MockDisplayObjectContainer";
import { MockDisplayObjectObserver } from "../../displayList/support/MockDisplayObjectObserver";

describe("MediatorMap", () => {
    let context: IContext = null;
    let mediatorMap: MediatorMap = null;

    beforeEach(() => {
        context = new Context();
        context.injector
            .bind<interfaces.Factory<IDisplayObjectObserver>>(IDisplayObjectObserverFactory)
            .toFactory<IDisplayObjectObserver>(() => {
                return (view: IDisplayObject, useCapture: boolean): IDisplayObjectObserver => {
                    return new MockDisplayObjectObserver(view, useCapture);
                };
            });
        mediatorMap = new MediatorMap(context);
    });

    afterEach(() => {
        if (context.initialized) {
            context.destroy();
        }

        context = null;
        mediatorMap = null;
    });

    it("mapMatcher_creates_mapper", () => {
        const matcher: TypeMatcher = new TypeMatcher().allOf(MockDisplayObjectContainer);
        assert.instanceOf(mediatorMap.mapMatcher(matcher), MediatorMapper);
    });

    it("mapMatcher_to_matching_TypeMatcher_returns_same_mapper", () => {
        const matcher1: TypeMatcher = new TypeMatcher().allOf(MockDisplayObjectContainer);
        const matcher2: TypeMatcher = new TypeMatcher().allOf(MockDisplayObjectContainer);
        const mapper1: IMediatorMapper = mediatorMap.mapMatcher(matcher1);
        const mapper2: IMediatorMapper = mediatorMap.mapMatcher(matcher2);
        assert.equal(mapper1, mapper2);
    });

    it("mapMatcher_to_differing_TypeMatcher_returns_different_mapper", () => {
        const matcher1: TypeMatcher = new TypeMatcher().allOf(MockDisplayObjectContainer);
        const matcher2: TypeMatcher = new TypeMatcher().allOf(MockDisplayObject);
        const mapper1: IMediatorMapper = mediatorMap.mapMatcher(matcher1);
        const mapper2: IMediatorMapper = mediatorMap.mapMatcher(matcher2);
        assert.notEqual(mapper1, mapper2);
    });

    it("map_creates_mapper", () => {
        assert.instanceOf(mediatorMap.map(MockDisplayObjectContainer), MediatorMapper);
    });

    it("map_to_matching_TypeMatcher_returns_same_mapper", () => {
        const mapper1: IMediatorMapper = mediatorMap.map(MockDisplayObjectContainer);
        const mapper2: IMediatorMapper = mediatorMap.map(MockDisplayObjectContainer);
        assert.equal(mapper1, mapper2);
    });

    it("map_to_differing_TypeMatcher_returns_different_mapper", () => {
        const mapper1: IMediatorMapper = mediatorMap.map(MockDisplayObjectContainer);
        const mapper2: IMediatorMapper = mediatorMap.map(MockDisplayObject);
        assert.notEqual(mapper1, mapper2);
    });

    it("unmapMatcher_returns_mapper", () => {
        const mapper: MediatorMapper = <MediatorMapper>mediatorMap.mapMatcher(new TypeMatcher().allOf(MockDisplayObjectContainer));
        const unmappedMapper: MediatorMapper = <MediatorMapper>(
            mediatorMap.unmapMatcher(new TypeMatcher().allOf(MockDisplayObjectContainer))
        );
        assert.equal(unmappedMapper, mapper);
    });

    it("unmap_returns_mapper", () => {
        const mapper: MediatorMapper = <MediatorMapper>mediatorMap.map(MockDisplayObjectContainer);
        const unmappedMapper: MediatorMapper = <MediatorMapper>mediatorMap.unmap(MockDisplayObjectContainer);
        assert.equal(unmappedMapper, mapper);
    });

    it("robust_to_unmapping_non_existent_mappings", () => {
        mediatorMap.unmapMatcher(new TypeMatcher().allOf(MockDisplayObjectContainer)).fromAll();
    });
});
