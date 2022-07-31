import {Conteiner, Title,Image,Content} from "./styles.js"
export default function Highlight({content,image,title}){
    return(
    <Conteiner>
        <Image src={image} alt={title}/>
        <Title>
            {title}
        </Title>
        <Content>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </Content>
    </Conteiner>
    )
}