import { ProfileData } from '@/pages/profile/[id]'
import { Container, ProfileDetailsWrapper, UserInfo, Button } from './styles'
import { Avatar } from '../ui/Avatar'
import { Heading, Text } from '../Typography'
import { ProfileDetailItem } from './ProfileDetailItem'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
  Pen,
} from '@phosphor-icons/react'
import { useRouter } from 'next/router'

type ProfileDetailsProps = {
  profile: ProfileData
}

export const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear()

  const router = useRouter()

  function handleWritePost() {
    router.push(`/post-write`)
  }

  return (
    <Container>
      <UserInfo>
        <Avatar
          size="lg"
          alt={profile.user.name}
          src={profile.user.avatar_url!}
        />
        <Heading size="md" css={{ marginTop: 20 }}>
          {profile.user.name}
        </Heading>
        <Text size="md" color="gray-400">
          membro desde {memberSinceYear}
        </Text>
      </UserInfo>
      <ProfileDetailsWrapper>
        <ProfileDetailItem
          icon={<BookOpen />}
          info={profile.readPages}
          label="Páginas lidas"
        />
        <ProfileDetailItem
          icon={<Books />}
          info={profile.ratedBooks}
          label="Livros avaliados"
        />
        <ProfileDetailItem
          icon={<UserList />}
          info={profile.readAuthors}
          label="Autores lidos"
        />
        <Button onClick={handleWritePost}>
          Write Post <Pen size={24} />
        </Button>

        {profile?.mostReadCategory && (
          <ProfileDetailItem
            icon={<BookmarkSimple />}
            info={profile.mostReadCategory}
            label="Categoria mais lida"
          />
        )}
      </ProfileDetailsWrapper>
    </Container>
  )
}
