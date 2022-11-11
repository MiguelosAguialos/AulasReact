import * as Icon from 'phosphor-react';
export function Sidebar(){
    return (
        <div>
            <div>
                {/* {<Avatar src="https://github.com/MiguelosAguialos.png" />} */}
                <strong>Miguel Aguiar</strong>
                <span>Web Developer</span>
            </div>
 
            <footer>
                <a target="_blanck" href="https://github.com/MiguelosAguialos">
                    <Icon.House size="24px"/>
                    Editar seu perfil
                </a>
            </footer>
        </div>
    );
}