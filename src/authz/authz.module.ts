import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtstrategyService } from './jwtstrategy.service';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
    providers: [JwtstrategyService],
    exports: [PassportModule]
})
export class AuthzModule {}
