import indexAjaxJson from '../../ajax/indexAjaxJson';

export default function cmdExport(data) {
  return indexAjaxJson({ cmd: 'export', ...data });
}
