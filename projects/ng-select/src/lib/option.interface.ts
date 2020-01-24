export interface IOption<TOption extends string | number> {
    value: TOption;
    label: string;
    disabled?: boolean;
}
