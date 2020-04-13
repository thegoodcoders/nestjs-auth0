import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
export class JwtstrategyService extends PassportStrategy(Strategy, 'jwt') {

    constructor() {

        super({
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${process.env.AUTH0_DOMAIN}.well-known/jwks.json`
            }),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_DOMAIN,
            algorithms: ['RS256']
        });
    }

    validate(payload: any) {
        return payload;
    }

}
