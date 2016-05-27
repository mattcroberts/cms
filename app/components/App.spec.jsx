import React from "react";
import App from "./App";
import {shallow} from "enzyme";
import {expect} from "chai";

describe("<App/>", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("exists", () => {
        expect(wrapper.find("div")).to.have.length(1);
    });
});
