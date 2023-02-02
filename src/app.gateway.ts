import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { BookCommentsDto } from './book-comments/dto/book-comments.dto';
import { BookCommentsService } from './book-comments/book-comments.service';

@WebSocketGateway()
export class AppGateway {
    constructor(private readonly bookCommentsService: BookCommentsService) {}

    @WebSocketServer() server: Server;

    @SubscribeMessage('addComment')
    handleAddComment(@MessageBody() data: BookCommentsDto) {
        return this.bookCommentsService.create(data);
    }

    @SubscribeMessage('getAllComments')
    async handleGetAllComments(
        @MessageBody() data: Omit<BookCommentsDto, 'comment'>,
        @ConnectedSocket() client: Socket,
    ) {
        const comments = await this.bookCommentsService.findAllComments(
            data.bookId,
        );
        client.emit('getAllComments', comments);
    }
}
