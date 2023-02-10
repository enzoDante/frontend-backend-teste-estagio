import { StyledContato } from "../../components/Styles/StyledContato";

export default function Contato(){

    return(
        <StyledContato>
            <form action="" method="post">
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" />
                    <p>{'erro'}</p>
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email" />
                    <p>{'erro'}</p>
                </div>
            </form>
        </StyledContato>
    )
}