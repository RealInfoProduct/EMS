import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable} from '@angular/core'
import { take , exhaustMap, finalize} from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { LoaderService } from '../service/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    private totalRequests = 0;
    
    constructor(private authService:AuthService,private loadingService: LoaderService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        this.totalRequests++;
        this.loadingService.setLoading(true);
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {

                if(!user){
                return next.handle(req).pipe(
                    finalize(()=>{
                        this.totalRequests--;
                        if (this.totalRequests == 0) {
                            this.loadingService.setLoading(false);
                          }
                    })
                )
                }

                const modifiedReq = req.clone({
                    params:new HttpParams().set('auth',user.token)
                })
                return next.handle(modifiedReq).pipe(
                    finalize(()=>{
                        this.totalRequests--;
                        if (this.totalRequests == 0) {
                            this.loadingService.setLoading(false);
                          }
                    })
                );
            })
        )
    }
}