package allan.flight.service;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

public class CORSFilter implements Filter {

	@Override
	public void destroy() {
	
	}

	@Override
	public void doFilter(ServletRequest arg0, ServletResponse arg1,
			FilterChain arg2) throws IOException, ServletException {
		((HttpServletResponse) arg1).addHeader("Access-Control-Allow-Origin",
				"*");
		((HttpServletResponse) arg1)
				.addHeader("Access-Control-Max-Age", "3600");
		((HttpServletResponse) arg1)
				.addHeader(
						"Access-Control-Allow-Headers",
						"Content-Type, Accept, Origin, X-Requested-With, MaxDataServiceVersion, DataServiceVersion, dptoken, role , platform");
		((HttpServletResponse) arg1).addHeader("Access-Control-Allow-Methods",
				"PUT, POST, GET, DELETE, MERGE, OPTIONS");
		arg2.doFilter(arg0, arg1);

	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {

	}

}
