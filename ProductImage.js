import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet } from 'react-native';
import { FALLBACK_IMAGE } from '../../../config/common';

class ProductImage extends React.Component {
    state = {
        image: FALLBACK_IMAGE
    };

    componentDidMount() {
        this.setState({ image: this.props.src });
    }

    loadFallback() {
        this.setState({ image: FALLBACK_IMAGE });
    }

    render() {
        return (<Image
            source={{ uri: this.state.image }}
            style={styles.image}
            resizeMode="contain"
            onError={() => this.loadFallback()} />
        );
    }

}

const styles = StyleSheet.create({
    image: { flex: 1 }
});

ProductImage.propTypes = {
    src: PropTypes.string
};

export default ProductImage;