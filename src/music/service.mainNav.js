class MainNavService {
    constructor() {
        this.mainNavIsOpen = true;
    }

    get mainNavOpenCloseState() {
        return this.mainNavIsOpen
    }

    set mainNavOpenCloseState(newValue) {
        this.mainNavIsOpen = newValue;
    }
}

export default MainNavService