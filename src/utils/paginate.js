//write formula to return movies according to pageCount

import _ from 'lodash'

export default function paginate(items, pageSize, currentPage) {
    const startIndex = (currentPage - 1) * pageSize;
    //
    return _(items).slice(startIndex).take(pageSize).value();
    // let it = []
    // for (let i = startIndex; i < pageSize * currentPage; i++)
    //     it[i - startIndex] = items[i]
    // return it

}