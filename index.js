import browser from './browser.js';
import date from './date.js';
import copy from './copy.js';
import formatParams from './formatParams.js';
import hOwnProperty from './hOwnProperty.js';
import isArray from './isArray.js';
import random from './random.js';
import time from './time.js';
import toBase64 from './toBase64.js';
import hasRepeat from './hasRepeat.js';
import searchUrl from './searchUrl.js';
import typeofFn from './typeof.js';
import empty from './empty.js';
import scrolltop from './scrolltop.js';
import nbr from './nbr.js';
import brn from './brn.js';
import utf8encode from './utf8encode.js';

var underline = function() {};

underline.browser = browser;
underline.date = date;
underline.copy = copy;
underline.formatParams = formatParams;
underline.hOwnProperty = hOwnProperty;
underline.isArray = isArray;
underline.random = random;
underline.time = time;
underline.toBase64 = toBase64;
underline.hasRepeat = hasRepeat;
underline.searchUrl = searchUrl;
underline.typeof = typeofFn;
underline.empty = empty;
underline.scrolltop = scrolltop;
underline.brn = brn;
underline.nbr = nbr;
underline.utf8encode = utf8encode;

export default underline;
