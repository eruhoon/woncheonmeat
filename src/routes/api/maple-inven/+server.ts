import cheerio from 'cheerio';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    const response = await fetch('https://www.inven.co.kr/board/maple/5974');
    const text = await response.text();
    const $ = cheerio.load(text, {
        ignoreWhitespace: true,
        normalizeWhitespace: true,
        lowerCaseTags: true
    });
    const $board = $('article#new-board div.board-list');
    const $rows = $board.find('tbody tr').not('.notice');

    const result = $rows
        .toArray()
        .map((e) => $(e))
        .map(($row) => {
            const $link = $row.find('td.tit a.subject-link');
            const title = $link.text().trim().replace(/\s+/g, ' ');
            const link = $link.attr('href');
            const raw = $row.html();
            return {
                title,
                link
                //raw
            };
        });

    return new Response(JSON.stringify(result));
};
