const hooks = (Collection) => {
    Collection.before.find(function (userId, selector, options) {
        if (typeof selector === 'undefined')
            selector = {};
        selector.ownerId = userId;
    });

    Collection.before.findOne(function (userId, selector, options) {
        if (typeof selector === 'undefined')
            selector = {};
        selector.ownerId = userId;
    });

    Collection.before.insert(function (userId, doc) {
        doc.ownerId = userId;
        doc.cratedAt = new Date();
    });

    Collection.before.update(function (userId, doc, fieldNames, modifier, options) {
        modifier.$set = modifier.$set || {};
        delete modifier.$set.ownerId;
        modifier.$set.modifiedAt = new Date();
    });

};
