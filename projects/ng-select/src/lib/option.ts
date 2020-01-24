import {IOption} from './option.interface';

export class Option<TOption extends string | number> {

    wrappedOption: IOption<TOption>;

    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    shown: boolean;

    constructor(option: IOption<TOption>) {
        this.wrappedOption = option;

        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }

    get value(): TOption {
        return this.wrappedOption.value;
    }

    get label(): string {
        return this.wrappedOption.label;
    }
}
