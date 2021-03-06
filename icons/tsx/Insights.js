"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledInsights = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:14px;height:16px;transform:scale(var(--ggs,1));border-left:8px solid transparent;border-top:4px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:16px;border:2px solid;right:4px;bottom:0}&::before{height:8px;right:8px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:14px;height:16px;transform:scale(var(--ggs,1));border-left:8px solid transparent;border-top:4px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:16px;border:2px solid;right:4px;bottom:0}&::before{height:8px;right:8px}\n"])));
exports.Insights = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledInsights, tslib_1.__assign({}, props, { ref: ref, "icon-role": "insights" }))));
});
var templateObject_1;
//# sourceMappingURL=Insights.js.map