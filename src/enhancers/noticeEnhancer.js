const modal = weex.requireModule('modal')
const noticeEnhancer = {
    install: function (Vue) {
        Object.defineProperties(Vue.prototype, {
            $alert: {
                get() {
                    return modal.alert
                }
            },
            $toast: {
                get() {
                    return modal.toast
                }
            },
            $confirm: {
                get() {
                    return modal.confirm
                }
            },
            $prompt: {
                get() {
                    return modal.prompt
                }
            }
        })
    }
}
console.log(modal.alert, 999999)
module.exports = noticeEnhancer