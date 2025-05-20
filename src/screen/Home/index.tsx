import { FlatList, Modal } from "react-native";
import { Button } from "../../components/Button";
import { CardProf } from "../../components/CardProf";
import { Input } from "../../components/Input";
import { themes } from "../../global/themes";
import { AreaBtnSerch, AreaInput, AreaModal, AreaProf, AreaSearch, AreaTextModal, BtnSerch, Container, FormModal, Header, SubTitleModal, TitleModal } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

export function Home(){
    const [ professor, setProfessor ] = useState(['1','2','3','4','5','6'])
    return(
        <Container>
            <Header>
                <AreaSearch>
                    <AreaInput>
                        <Input title="Procurar..."/>
                    </AreaInput>
                    <AreaBtnSerch>
                        <BtnSerch>
                            <Ionicons name="search-sharp" size={30} color={themes.colors.surface} />
                        </BtnSerch>
                    </AreaBtnSerch>
                </AreaSearch>
                <Button
                    title="Publicar"
                    colorText={themes.colors.surface}
                    colorBtn={themes.colors.primary}
                    border="none"
                />
            </Header>
            <AreaProf>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={professor}
                    renderItem={({ item }) =>
                        <CardProf 
                            name="Pedro Silva"
                            subject="Matemática"
                            bio="Professor com 5 anos de experiência. Gosto de ensinar com exemplos práticos."
                            photoUrl="https://instagram.flad8-2.fna.fbcdn.net/v/t51.2885-19/464988685_910936807224859_4918842531589173522_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.flad8-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QGlBfTHosGxD_SgzKGod8EB67CqgWqemGlJ41s3xxr8qOL8yiq15xApDO7uimZB1jI&_nc_ohc=0ENtL6-7CkIQ7kNvwGcXdxM&_nc_gid=p5NyaUWSlgCKvyACTZOYgg&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfL5QXEqCj8cUhUo2FPN0Yf-wzVwsWOrxexPY_k24mxm2A&oe=682E83D2&_nc_sid=7d3ac5"
                            onContactPress={()=> {}}
                        /> }
                />
            </AreaProf>

            <Modal
                transparent
                animationType="slide"
                visible={false}
                onRequestClose={() => {}}
            >
                <AreaModal>
                    <FormModal style={{elevation: 2}}>
                        <AreaTextModal>
                            <TitleModal>Publicar para encotrar professor</TitleModal>
                            <SubTitleModal>Apenas os professores verão esse post</SubTitleModal>
                        </AreaTextModal>
                        <Input 
                            title="Escreve algo..."
                            multiline
                            numberOfLines={8}
                        />
                        <Button 
                            title="Publicar"
                            colorBtn={themes.colors.accent}
                            colorText={themes.colors.surface}
                            border="none"
                        />
                    </FormModal>
                </AreaModal>
            </Modal>
        </Container>
    );
}