export default class Component {
    $target;
    $props;
    $state;

    constructor($target, $props) {
        this.$target = $target;
        this.$props = $props;   // $props 할당
        this.setup();
        this.setEvent();
        this.render();
    }

    setup () {}
    mounted () {}
    template () { return ''; }
    render () {
        this.$target.innerHTML = this.template();
        this.mounted();
    }

    setEvent () {}
    setState (newState) {
        console.log('setState', newState);
        this.$state = { ...this.$state, ...newState };
        this.render();
    }

    // 이벤트 등록 함수 추가
    addEvent (eventType, selector, callback) {
        const children = [ ...this.$target.querySelectorAll(selector) ];
        // selector 에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
        // closest 를 이용하여 처리
        const isTarget = (target) => children.includes(target) || target.closest(selector);

        this.$target.addEventListener(eventType, event => {
            if(!isTarget(event.target)) return false;
            callback(event);
        })
    }
}
