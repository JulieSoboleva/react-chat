import { IFrom } from '../models/IFrom'
import { IMsg } from '../models/IMsg'

interface IMsgFrom {
    msg: IMsg,
    from: IFrom,
}

export default function Message({msg, from}: IMsgFrom) {
    return (
        <li>
            <div className='message-data'>
                <span className='message-data-name'>
                    <i className='fa fa-circle online'></i>
                    {from.name}
                </span>
                <span className='message-data-time'>{msg.time}</span>
            </div>
            <div className='message my-message'>{msg.text}</div>
        </li>
    );
}