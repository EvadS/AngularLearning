return this._http.get(${environment.API_HTTP_URL}mac-address/export, { params, responseType: 'blob' })
      .map(blob => {
          const fileName = securew2-mac-addresses.${type},
                isIEBrowser = navigator.appName === 'Microsoft Internet Explorer'
                  || !!(navigator.userAgent.match(/Trident/)
                  || navigator.userAgent.match(/rv:11/));

          if (isIEBrowser) {
              if (navigator.appVersion.toString().indexOf('.NET') > 0) {
                  window.navigator.msSaveBlob(blob, fileName);
              } else {
                  const link: any = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
                  link.href       = URL.createObjectURL(blob);
                  link.download   = fileName;
                  link.click();
              }
          } else {
              const a: any = document.createElement('a'),
                    fileURL = URL.createObjectURL(blob);

              a.style     = 'display:none';
              a.href      = fileURL;
              a.download  = fileName;

              window.document.body.appendChild(a);
              a.click();
              window.document.body.removeChild(a);
              URL.revokeObjectURL(fileURL);
          }
          return blob;
      })
      .catch(error => {
          this._showError(error);
          return Observable.throw(error);
      });
}