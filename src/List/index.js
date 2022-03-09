import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

const List = ({ data }) => {

  const carregaIcone = (likeada) => {
    return likeada ? require('../img/likeada.png') :
      require('../img/like.png')
  }

  const mostraLikes = (likers) => {
    if (likers === 0) {
      return;
    }

    return (
      <Text style={styles.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
    )
  }

  return (
    <View>
      <View style={styles.viewPerfil}>
        <Image
          source={{ uri: data.imgperfil }}
          style={styles.fotoPerfil}
        />
        <Text style={styles.nomeUsuario}>{data.nome}</Text>

      </View>

      <Image
        source={{ uri: data.imgPublicacao }}
        style={styles.fotoPublicacao}
        resizeMode="cover"
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
            source={carregaIcone(data.likeada)}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../img/comment.png')}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../img/send.png')}
            style={styles.iconeLike}
          />
        </TouchableOpacity>
      </View>

      {mostraLikes(data.likers)}

      <Text style={styles.nomeRodape}>
        {data.nome}
      </Text>

      <Text style={styles.descRodape}>
        {data.descricao}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,

  },
  nomeUsuario: {
    paddingLeft: 4,
    fontSize: 22,
    color: '#000'
  },
  fotoPublicacao: {
    height: 400,
    alignItems: 'center'
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 4
  },
  iconeLike: {
    width: 25,
    height: 25
  },
  btnSend: {
    paddingLeft: 5
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  descRodape: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15
  }
})

export default List;
