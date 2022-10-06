import React from "react";
import style from'./botao.module.scss'

class BotaoOFC extends React.Component<{ texto: string, type?: "button" | "submit" | "reset" | undefined }> {

    render() {
        const { type = "button" } = this.props;
        return (
            <button type={type}>
                {this.props.texto}
            </button>
        )
    }
}

export default BotaoOFC;

