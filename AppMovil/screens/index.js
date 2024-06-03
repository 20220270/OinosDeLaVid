import React from "react";
import Screen from "./Screen";

export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name="Menu" />;
export const MessageScreen = ({navigation}) => <Screen navigation={navigation} name="Ordenes" />;
export const ActivityScreen = ({navigation}) => <Screen navigation={navigation} name="Mis compras" />;
export const ListScreen = ({navigation}) => <Screen navigation={navigation} name="Perfil" />;
