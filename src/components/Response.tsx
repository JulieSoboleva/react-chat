import { IFrom } from '../models/IFrom'
import { IMsg } from '../models/IMsg'

interface IMsgFrom {
    msg: IMsg,
    from: IFrom,
}

export default function Message({msg, from}: IMsgFrom) {
    return (
        <li className='clearfix'>
            <div className='message-data align-right'>
                <span className='message-data-time'>{msg.time}</span> &nbsp; &nbsp;
                <span className='message-data-name'>{from.name}</span> &nbsp;
                <i className='fa fa-circle me'></i>
            </div>
            <div className='message other-message float-right'>{msg.text}</div>
        </li>
    );
}