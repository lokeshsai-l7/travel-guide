import {
  Card,
  GuideImage,
  PlaceName,
  PlaceDescription,
  TextContainer,
} from './styledComponents'

export default function GuideCard({guideCard}) {
  const {imageUrl, id, name, description} = guideCard
  return (
    <Card key={id}>
      <GuideImage alt={name} src={imageUrl} />
      <TextContainer>
        <PlaceName>{name}</PlaceName>
        <PlaceDescription>{description}</PlaceDescription>
      </TextContainer>
    </Card>
  )
}
