/*
 * @Author: 肖锦
 * @Date: 2021-06-04 09:24:03
 * @LastEditTime: 2021-06-04 10:30:34
 * @Description: file content
 * @LastEditors: 肖锦
 */
import Clipboard from 'clipboard';
export default {
    bind: (el, binding) => {
        const clipboard = new Clipboard(el, {
            text: () => binding.value.value,
        });
        el.__success_callback__ = binding.value.success;
        el.__error_callback__ = binding.value.error;
        clipboard.on('success', (e) => {
            const callback = el.__success_callback__;
            callback && callback(e);
        });
        clipboard.on('error', (e) => {
            const callback = el.__error_callback__;
            callback && callback(e);
        });
        el.__clipboard__ = clipboard;
    },
    update: (el, binding) => {
        el.__clipboard__.text = () => binding.value.value;
        el.__success_callback__ = binding.value.success;
        el.__error_callback__ = binding.value.error;
    },
    unbind: (el, binding) => {
        delete el.__success_callback__;
        delete el.__error_callback__;
        el.__clipboard__.destroy();
        delete el.__clipboard__;
    },
};
