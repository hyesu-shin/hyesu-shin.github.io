import Component from "../core/Component.js";

export default class Header extends Component {

    template() {
        return `
            <div class="hero is-success">
                <div class="hero-body">
                    <p>이곳은 타이틀 영역입니다.</p>            
                </div>
            </div>
        `
    }

    setEvent() {

    }
}
