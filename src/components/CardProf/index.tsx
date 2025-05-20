import { 
    Container,
    Avatar,
    InfoContainer,
    Name,
    Subject,
    Bio,
    ContactButton,
    ContactText
} from "./styles";

import { Ionicons } from '@expo/vector-icons';

interface TeacherCardProps {
  name: string;
  subject: string;
  bio: string;
  photoUrl: string;
  onContactPress: () => void;
}

export function CardProf ({ name, subject, bio, photoUrl, onContactPress }: TeacherCardProps) {
  return (
    <Container>
      <Avatar source={{ uri: photoUrl }} />
      <InfoContainer>
        <Name>{name}</Name>
        <Subject>{subject}</Subject>
        <Bio numberOfLines={2}>{bio}</Bio>
        <ContactButton onPress={onContactPress}>
          <Ionicons name="chatbox-ellipses" size={18} color="#fff" />
          <ContactText>Contactar</ContactText>
        </ContactButton>
      </InfoContainer>
    </Container>
  );
};