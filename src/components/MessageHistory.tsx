import { IMessage } from '../models/IMessage'
import Message from './Message'
import Response from './Response'
import Typing from './Typing'
import { IMsg } from '../models/IMsg'

interface IMessages {
    list: IMessage[]
}

export default function MessageHistory({list}: IMessages) {
    if (list.length < 1) {
        return null;
    }

    return (
        <ul>
            {list.map(item => {
                const msg: IMsg = {
                    id: item.id, time:item.time, text:item.text
                }
                if (item.type === 'message') {
                    return (<Message key={msg.id} msg={msg} from={item.from}/>);
                }
                if (item.type === 'response') {
                    return (<Response key={msg.id} msg={msg} from={item.from}/>);
                }
                return (<Typing key={msg.id} msg={msg} from={item.from}/>);
            })}
        </ul>
    );
}

MessageHistory.defaultProps = {
    list: [],
}