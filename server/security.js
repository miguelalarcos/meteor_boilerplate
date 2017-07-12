import { Security } from 'meteor/ongoworks:security';

Security.defineMethod('ownsDocument', {
    fetch: [],
    allow(type, field, userId, doc) {//check doc is not undefined
        if(!doc) return false;
        if (!field) field = 'userId';
        return userId === doc[field];
    }
});

//Books.permit(['update', 'remove']).ownsDocument('ownerId');