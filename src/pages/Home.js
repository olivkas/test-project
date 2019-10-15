import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getData } from '../store/actions';
import FormData from '../components/form/index';
import Spin from 'arui-feather/spin';


import '../App.css'

class Home extends Component {

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
  const { data } = this.props;
    return (
      <div className="wrapper">
        { data.loading ?
          <h1 className="loading"><Spin size='l' visible={ true } />loading</h1> :
          <FormData title={data.title} image={data.image} fields={data.fields} /> }
      </div>
    );
  }};

const loadData = (store, param) => {
  return store.dispatch(getData(param));
}
const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = { getData };

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home),
  loadData
};