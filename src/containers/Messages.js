/*
* @Author: nshah
* @Date:   2017-09-15 00:51:31
* @Last Modified by:   nshah
* @Last Modified time: 2017-09-15 00:52:18
*/


import React from 'react';
import { connect } from 'react-redux';
import { View, Spinner } from '@shoutem/ui';

import MessageList from '../components/MessageList';
import { updateMessagesHeight } from '../actions';

const mapStateToProps = (state) => ({
    messages: state.chatroom.messages,
    isFetching: state.chatroom.meta.isFetching
});

const Messages = connect(
    mapStateToProps
)(({ messages, isFetching, dispatch }) => {
    if (isFetching) {
        return (
            <View style={{paddingTop: 50,
                          paddingBottom: 50}}>
                <Spinner />
            </View>
        )
    }else{
        return <MessageList messages={messages}
                            style={{minHeight: 100}}
                            onLayout={(event) => dispatch(updateMessagesHeight(event))} />
    }
});

export default Messages;