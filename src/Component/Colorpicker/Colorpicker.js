import React, { Component } from 'react'
import { SketchPicker, AlphaPicker, BlockPicker, ChromePicker, CirclePicker, CompactPicker, GithubPicker, HuePicker, MaterialPicker, PhotoshopPicker, SliderPicker, SwatchesPicker, TwitterPicker } from 'react-color'


// use react-bootstrap component
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// use css 
import style from './Colorpicker.module.scss'

export default class Colorpicker extends Component {
    state = {
        background: '#FFFFFF',
    };
    handleChangeColor = (color) => {
        this.setState({ background: color.hex });
    }
    render() {
        return (
            <Container className={style.bg} style={{ backgroundColor: 'white' }}>

                <Row style={{ backgroundColor: this.state.background }}>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12} >
                        <SketchPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <AlphaPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <BlockPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <ChromePicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <CirclePicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <CompactPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <GithubPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <HuePicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <MaterialPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={12} xl={12} sm={12}>
                        <PhotoshopPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <SketchPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <SliderPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <SwatchesPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                    <Col className='p-3 mt-4 w-100' md={4} xl={4} sm={12}>
                        <TwitterPicker
                            className={style.pickerWidth}
                            color={this.state.background}
                            onChangeComplete={this.handleChangeColor}
                        />
                    </Col>
                </Row>

            </Container>
        )
    }
}
