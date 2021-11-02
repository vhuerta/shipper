import React from 'react';
import { View } from 'react-native';
import { ScrollView } from '../../../components/Layout.styled';
import PackageElement from './PackageElement';

type PackageListProps = {
  packages: Package[];
  readOnly: boolean;
};

export default function PackageList({ packages, readOnly }: PackageListProps) {
  const Container = readOnly ? View : ScrollView;
  return (
    <Container>
      {packages.map((pack) => (
        <PackageElement key={pack.id} package={pack} readOnly={readOnly} />
      ))}
    </Container>
  );
}
