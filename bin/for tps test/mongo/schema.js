/**
 * Created by suji on 2017-01-24.
 */
// mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodejstest');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(){
    console.log('mongodb connection success!');
    return;
});
var asset_schema = mongoose.Schema({
        //asset info - asset profile 2 (자사 asset profile 정보 기준)
        assetId : String,
        title : String,
        director : String,
        starring : String,
        production : String,
        synopsis : String,
        genre : String,
        runningTime : String,
        previewPeriod : Number,
        rating : String,
        soundMix : String,
        copyProtection : Boolean,
        encryption : Boolean,
        HDContent : Boolean,
        UHDContent : Boolean,
        threeDimIndicator : String,
        licenseStart : String,
        licenseEnd : String,
        filename : String,
        imageFileName : String,
        reviewRatingTotal : Number,
        reviewRatingCount : Number,
        promotionCopy : String,
        promotionSticker : Number,
        publicationRight : String,
        //productlist only one 가정해 표현 - 테스트용이니 (productId ~ isSeries)
        productId : String,
        goodId : String,
        casProductId : String,
        casId : String,
        jsCasPersonalBit : String,
        casEntitlementId : String,
        productName : String,
        productType : String,
        listPrice : Number,
        price : Number,
        bVATIncludedPrice : Boolean,
        discountEndTime : String,
        purchasedId : String,
        purchasedTime : String,
        viewablePeriod : String,
        viewablePeriodState : Number,
        purchaseMethod : Number,
        // rewardList only one 가정 - 테스트용 (rewardId ~ rewardAmount)
        rewardId : String,
        rewardType : String,
        rewardApplicableType : String,
        rewardAmount : Number,
        totalAssetCount : Number,
        isSeries : Boolean,
        // discountCouponMateredIdList는 하나의 String으로 표현. oracle과의 비교를 위해-동일 상황에서-.
        discountCouponMasterIdList : String
    },
    { versionKey: false }
);

// create model with mongodb collection & schema
var Asset = mongoose.model('asset',asset_schema);
console.log(Asset);


module.exports = Asset;