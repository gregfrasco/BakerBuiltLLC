// Created by iWeb 3.0.4 local-build-20140609

function createMediaStream_id2()
{return IWCreatePhotocast("http://bakerbuiltllc.com/Baker_Built/Portfolio_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://bakerbuiltllc.com/Baker_Built',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://bakerbuiltllc.com/Baker_Built',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,34),new IWSize(229,240),27,27,0,new IWSize(22,22)),new IWPhotoFrame([IWCreateImage('Portfolio_files/Formal_inset_01.png'),IWCreateImage('Portfolio_files/Formal_inset_02.png'),IWCreateImage('Portfolio_files/Formal_inset_03.png'),IWCreateImage('Portfolio_files/Formal_inset_06.png'),IWCreateImage('Portfolio_files/Formal_inset_09.png'),IWCreateImage('Portfolio_files/Formal_inset_08.png'),IWCreateImage('Portfolio_files/Formal_inset_07.png'),IWCreateImage('Portfolio_files/Formal_inset_04.png')],null,0,0.801053,1.000000,1.000000,1.000000,1.000000,14.000000,14.000000,14.000000,14.000000,191.000000,262.000000,191.000000,262.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,20),url:'Portfolio_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Portfolio_files/stroke_1.png'},{rect:new IWRect(2,-2,134,4),url:'Portfolio_files/stroke_2.png'},{rect:new IWRect(136,-2,4,4),url:'Portfolio_files/stroke_3.png'},{rect:new IWRect(136,2,4,20),url:'Portfolio_files/stroke_4.png'},{rect:new IWRect(136,22,4,4),url:'Portfolio_files/stroke_5.png'},{rect:new IWRect(2,22,134,4),url:'Portfolio_files/stroke_6.png'},{rect:new IWRect(-2,22,4,4),url:'Portfolio_files/stroke_7.png'}],new IWSize(138,24))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Portfolio_files/PortfolioMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
