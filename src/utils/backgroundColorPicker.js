export default function backgroundColorPicker() {
    return (
        (props => {
            switch (props.children) {
                case 'Released':
                    return `${props.theme.colors.green}`;
                case 'payment':
                    return `${props.theme.colors.red}`;
                default:
                    return `${props.theme.colors.yellow}`;
            }
        }))
}