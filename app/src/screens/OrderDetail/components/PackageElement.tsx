import React, { useContext } from 'react';
import { Alert, View } from 'react-native';
import { Subtitle } from '../../../components/Typography.styled';
import { removePackage, setActivePackage } from '../../../store/actions';
import { countPackageItems } from '../../../store/selectors';
import { Store } from '../../../store/Store';
import {
  ActiveText,
  Button,
  ButtonRemove,
  ButtonRemoveText,
  ButtonText,
  Container,
  Empty,
  Name,
  NameContainer,
  Small,
} from './PackageElement.styled';
import PackageElementItem from './PackageElementItem';

type PackageElementProps = {
  package: Package;
  readOnly: boolean;
};

export default function PackageElement({ package: pack, readOnly }: PackageElementProps) {
  const { state, dispatch } = useContext(Store);

  function handleRemove() {
    if (state.activePackage !== pack.id) {
      dispatch(removePackage(pack.id));
    } else {
      Alert.alert('Cannot remove the active package');
    }
  }

  function handleSetActive() {
    dispatch(setActivePackage(pack.id));
  }

  return (
    <Container>
      <NameContainer>
        <Name>
          Package {pack.id}{' '}
          {!readOnly && <Small>({countPackageItems(state, pack.id)} packed products)</Small>}
        </Name>
        {!readOnly && state.activePackage === pack.id && <ActiveText>Active</ActiveText>}
      </NameContainer>
      {!pack.line_items.length && <Empty>This package is empty</Empty>}
      {pack.line_items.map((item) => (
        <PackageElementItem key={`${pack.id}-${item.id}`} item={item} readOnly={readOnly} />
      ))}

      <View style={{ alignItems: 'flex-end', flexDirection: 'row' }}>
        {!readOnly && (
          <ButtonRemove onPress={handleRemove}>
            <ButtonRemoveText>Remove</ButtonRemoveText>
          </ButtonRemove>
        )}
        {!readOnly && state.activePackage !== pack.id && (
          <Button onPress={handleSetActive}>
            <ButtonText>Set Active</ButtonText>
          </Button>
        )}
      </View>
    </Container>
  );
}
