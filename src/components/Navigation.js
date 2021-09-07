import Component from "../core/Component.js";

export default class Navigation extends Component {

    template() {
        return `
            <div class="tile border-left mt-6">
                <div class="nav-wrap ml-4">
                    <h1>이곳은 내비게이션 영역입니다.</h1>
                </div>
            </div>
        `
    }
}
