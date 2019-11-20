import moment from 'moment';
// change the documuent title element
export function changeDocumentTitle(title, isHome = false) {
    if (isHome) {
        if (document.title !== `:.:. ${title} .:.:`) {
            document.title = `:.:. ${title} .:.:`;
        }
    }
    else if (document.title !== `WasakaScan ~ ${title}`) {
        document.title = `WasakaScan ~ ${title}`;
    }
}

export function parseCoinAmount(total, unit = 'gar') {
    let amount = 0;
    if (total % 1000 === 0 && unit !== 'wasa') {
        amount = total / 1000;
        unit = unit === 'avo' ? 'wasa' : 'avo';
        return parseCoinAmount(amount, unit);
    } else {
        amount = total;
    }
    if (!Number.isInteger(amount)) {
        amount = Math.round(amount * 100) / 100;
    }
    return `${amount} ${unit}`;
}

export function getTransactionsTotal(transactions) {
    let total = 0;
    transactions.forEach(({ value }) => {
        total += parseInt(value);
    });
    return parseCoinAmount(total);
}

export function getMiningTime(currentBlock, prevBlock = null) {
    if (!prevBlock) {
        return 'in 0 secs';
    }
    let currentBlockTime = new moment(currentBlock.dateCreated);
    let prevBlockTime = new moment(prevBlock.dateCreated);
    return moment.duration(prevBlockTime.diff(currentBlockTime)).humanize();
}

export function validateBlockDataHash(hash) {
    let regex_0x = new RegExp("^0x", "i");
    return (regex_0x.test(hash) && /^([A-Fa-f0-9]{40})$/.test(hash.replace(/^0x/, '')));
}

export function validateAddress(address) {
    let regex_0x = new RegExp("^0x", "i");
    return (regex_0x.test(address) && /^([A-Fa-f0-9]{64})$/.test(address.replace(/^0x/, '')));
}

export function parseHash0x(hash) {
    return new RegExp("^0x", "i").test(hash) ? hash.replace('0x', '') : hash;
}

export function formatTimeStamp(timestamp) {
    return moment(timestamp).format('dddd, MMMM Do YYYY, h:mm a')
}

export function getDifferenceFromNow(timestamp) {
    return moment.duration(moment(timestamp).diff(new moment())).humanize();
}